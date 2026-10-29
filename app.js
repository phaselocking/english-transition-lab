(() => {
  'use strict';

  // All choices exist only in this page's memory. No persistence or requests.
  const data = window.LAB_CONTENT;
  const journey = document.querySelector('#journey-app');
  const tabs = document.querySelector('#topic-tabs');
  const topicPanel = document.querySelector('#topic-panel');
  const state = { step: 0, branchId: null, followupIndex: null, topicId: 'listening', topicChoices: {} };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const arrow = '<span class="choice-arrow" aria-hidden="true">↗</span>';
  const wave = '<span class="scene-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>';
  const notebook = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 3h12v14H4zM7 3v14M9 7h4M9 10h4"/></svg>';

  if (!data) {
    journey.innerHTML = '<p class="no-script">情境内容未能加载。请确认 content.js 与 index.html 在同一文件夹，再刷新页面。</p>';
    return;
  }

  function choice(label, subtitle, index, action, extra = '') {
    return `<button class="choice-button ${action === 'topic-choice' ? 'topic-choice' : ''}" data-action="${action}" data-index="${index}" ${extra}>
      <span class="choice-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
      <span class="choice-copy"><strong>${escape(label)}</strong>${subtitle ? `<small>${escape(subtitle)}</small>` : ''}</span>${arrow}</button>`;
  }

  function progress() {
    return `<div class="journey-topbar"><div class="journey-step-list" aria-label="体验进度，当前第 ${state.step + 1} 步，共 3 步">
      ${['进入情境', '换个角度', '带走一个问题'].map((label, index) => `${index ? '<span class="step-rule" aria-hidden="true"></span>' : ''}<span class="journey-step ${state.step === index ? 'current' : ''}" ${state.step === index ? 'aria-current="step"' : ''}><b>0${index + 1}</b>${label}</span>`).join('')}
      </div><button class="reset-button" data-action="restart">↻ 重新开始</button></div>`;
  }

  function context(quote, copy, meta = '09:00 AM / YOUR FIRST SEMINAR') {
    return `<div class="scene-context"><div class="scene-meta">${wave}${escape(meta)}</div><p class="scene-quote">${escape(quote)}</p><p class="scene-copy">${escape(copy)}</p><span class="scene-tag">为本原型编写的模拟情境</span></div>`;
  }

  function focusJourney() {
    const heading = journey.querySelector('h3');
    heading?.focus({ preventScroll: true });
    // Keep new content visible when a long branch or a mobile panel changes.
    const rect = journey.getBoundingClientRect();
    if (rect.top < -60 || rect.top > window.innerHeight * .65) {
      journey.scrollIntoView({ block: 'start', behavior: reducedMotion() ? 'auto' : 'smooth' });
    }
  }

  function renderJourney(moveFocus = false) {
    const branch = data.branches.find(item => item.id === state.branchId);
    let scene;
    let content;
    if (state.step === 0 || !branch) {
      scene = context('“Take a moment. What do you think about the reading?”', '老师刚说完，大家低头翻看材料。有人抬起头，准备回应。你也坐在这张桌旁。');
      content = `<p class="micro-heading">这一刻，先听见自己。</p><h3 tabindex="-1">你更接近哪一种状态？</h3><div class="choices">${data.branches.map((item, index) => choice(item.title, item.subtitle, index, 'branch')).join('')}</div><p class="journey-subnote">选最接近的一项就好；你可以随时换个选择。</p>`;
    } else if (state.step === 1) {
      scene = context(branch.scene, '让画面停在这里。回应可以有很多种，也可以暂时没有答案。', 'PAUSE / A DIFFERENT ANGLE');
      content = `<p class="micro-heading">你刚才选择了：${escape(branch.title)}</p><h3 tabindex="-1">${escape(branch.question)}</h3><div class="choices">${branch.choices.map((item, index) => choice(item.label, '', index, 'followup')).join('')}</div><div class="back-control"><button class="text-button" data-action="back">← 返回上一步</button><span class="small-note">选择只决定接下来的内容</span></div>`;
    } else {
      const response = branch.choices[state.followupIndex];
      scene = context('A pause can be a beginning.', '这次停顿只是一个片刻，不能概括你的学习经历。带着一个问题，继续走进探索空间。', 'TAKE A NOTE / NOT A SCORE');
      content = `<p class="micro-heading">路径回声 · 不是对你的判断</p><h3 tabindex="-1">${escape(branch.takeaway.title)}</h3><p class="result-feedback">${escape(response.feedback)}</p><div class="takeaway-box"><p>${escape(branch.takeaway.text)}</p></div><p class="result-question"><span class="micro-heading">带走一个问题</span><br>${escape(branch.takeaway.question)}</p><div class="result-actions"><button class="button button-primary" data-action="continue">继续探索相关片刻 <span aria-hidden="true">↗</span></button><button class="text-button" data-action="back">← 返回上一步</button></div>`;
    }
    journey.innerHTML = `${progress()}<div class="journey-body">${scene}<div class="journey-content">${content}</div></div>`;
    if (moveFocus) focusJourney();
  }

  function resetExperience() {
    state.step = 0;
    state.branchId = null;
    state.followupIndex = null;
    state.topicId = 'listening';
    state.topicChoices = {};
    renderTopics();
  }

  document.querySelector('[data-restart]').addEventListener('click', () => {
    resetExperience();
    renderJourney();
    journey.querySelector('h3').focus({ preventScroll: true });
  });

  journey.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'branch') {
      state.branchId = data.branches[Number(button.dataset.index)].id;
      state.followupIndex = null;
      state.step = 1;
    } else if (action === 'followup') {
      state.followupIndex = Number(button.dataset.index);
      state.step = 2;
    } else if (action === 'back') {
      state.step = Math.max(0, state.step - 1);
      if (state.step === 0) state.branchId = null;
      state.followupIndex = null;
    } else if (action === 'restart') {
      resetExperience();
    } else if (action === 'continue') {
      const branch = data.branches.find(item => item.id === state.branchId);
      state.topicId = branch.suggestedTopic;
      renderTopics();
      document.querySelector('#explore').scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
      topicPanel.focus({ preventScroll: true });
      return;
    }
    renderJourney(true);
  });

  function renderTopics() {
    tabs.innerHTML = data.topics.map(item => `<button type="button" class="topic-tab" role="tab" id="tab-${escape(item.id)}" aria-controls="topic-panel" aria-selected="${state.topicId === item.id}" tabindex="${state.topicId === item.id ? '0' : '-1'}" data-topic="${escape(item.id)}"><span>${escape(item.number)}</span>${escape(item.tabLabel || item.title)}</button>`).join('');
    renderTopic();
  }

  function renderTopic() {
    const topic = data.topics.find(item => item.id === state.topicId);
    const selected = state.topicChoices[topic.id];
    const source = topic.insight.source;
    topicPanel.setAttribute('aria-labelledby', `tab-${topic.id}`);
    topicPanel.innerHTML = `<div class="topic-scenario"><div class="topic-heading"><span class="content-label">模拟情境</span> MOMENT ${escape(topic.number)} / ${escape(topic.english)}</div><p class="topic-quote">${escape(topic.quote)}</p><p class="topic-context">${escape(topic.context)}</p><h3 class="topic-question">${escape(topic.question)}</h3><div class="choices">${topic.choices.map((item, index) => choice(item.label, '', index, 'topic-choice', `aria-pressed="${selected === index}" aria-controls="topic-feedback"`)).join('')}</div><div id="topic-feedback" class="topic-feedback" ${selected === undefined ? 'hidden' : ''} role="status"><span class="feedback-label">换个角度看 · 模拟回应</span><p>${selected === undefined ? '' : escape(topic.choices[selected].feedback)}</p></div><p class="open-question"><b>↳ 仍需探索的研究问题</b>${escape(topic.researchQuestion)}</p></div>
      <aside class="insight-card" aria-label="学习参考"><div class="insight-label">${notebook}${escape(topic.insight.label)}</div><h3>${escape(topic.insight.title)}</h3><p>${escape(topic.insight.body)}</p><ol class="insight-steps" aria-label="原型练习示例">${topic.insight.steps.map((step, index) => `<li><span aria-hidden="true">0${index + 1}</span><div>${escape(step)}</div></li>`).join('')}</ol><div class="source-line">${source ? `参考：<a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗</a><div class="source-note">${escape(source.note)}</div>` : '原型练习示例 · 为本次探索设计，尚未验证效果。'}<div class="source-note">上方步骤为原型中的练习设计，请结合课程要求尝试。</div></div></aside>`;
  }

  tabs.addEventListener('click', event => {
    const button = event.target.closest('[data-topic]');
    if (!button) return;
    state.topicId = button.dataset.topic;
    renderTopics();
    document.querySelector(`#tab-${state.topicId}`).focus({ preventScroll: true });
  });

  tabs.addEventListener('keydown', event => {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key) || !event.target.matches('[role="tab"]')) return;
    event.preventDefault();
    let index = data.topics.findIndex(item => item.id === state.topicId);
    if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = data.topics.length - 1;
    else index = (index + (event.key === 'ArrowRight' ? 1 : -1) + data.topics.length) % data.topics.length;
    state.topicId = data.topics[index].id;
    renderTopics();
    const target = document.querySelector(`#tab-${state.topicId}`);
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  });

  topicPanel.addEventListener('click', event => {
    const button = event.target.closest('[data-action="topic-choice"]');
    if (!button) return;
    state.topicChoices[state.topicId] = Number(button.dataset.index);
    // Preserve the focused button while updating the live feedback.
    topicPanel.querySelectorAll('[data-action="topic-choice"]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const topic = data.topics.find(item => item.id === state.topicId);
    const feedback = topicPanel.querySelector('#topic-feedback');
    feedback.hidden = false;
    feedback.querySelector('p').textContent = topic.choices[Number(button.dataset.index)].feedback;
  });

  function renderJournals() {
    document.querySelector('#journal-entries').innerHTML = data.journals.map((entry, index) => `<details class="journal-entry" ${index === 0 ? 'open' : ''}><summary><span class="entry-number">${escape(entry.number)}</span><div><p class="entry-meta">${escape(entry.date)}<span>${escape(entry.status)}</span></p><h3 class="entry-title">${escape(entry.title)}</h3><p class="entry-summary">${escape(entry.summary)}</p></div><span class="entry-toggle" aria-hidden="true">+</span></summary><div class="entry-body">${entry.paragraphs.map(text => `<p>${escape(text)}</p>`).join('')}</div></details>`).join('');
  }

  renderJourney();
  renderTopics();
  renderJournals();

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('[data-nav]').forEach(link => {
        const active = link.dataset.nav === entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  ['journey', 'explore', 'journal'].forEach(id => sectionObserver.observe(document.getElementById(id)));
})();
