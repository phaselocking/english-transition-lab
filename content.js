/*
 * English Transition Lab · 内容层
 * 情境中的英文指令、回应与反馈均为原型编写的模拟内容。
 * 修改此文件即可更新路径、探索主题和研究手记；不需要修改交互逻辑。
 */
window.LAB_CONTENT = {
  branches: [
    {
      id: 'hesitating',
      title: '听懂了，但还在犹豫怎么开口',
      subtitle: '脑海里已经有了想法，声音却慢了一步。',
      scene: '你想到了一个例子。身旁的同学已经接上讨论，你还在心里组织第一句话。',
      question: '如果课堂多给你一点空间，什么可能让你更愿意试一次？',
      choices: [
        { label: '先和身边的人说一遍', feedback: '把全班发言换成两人交流，改变的是表达的环境。你可以留意：面对不同的人，犹豫会不会也不一样？' },
        { label: '先写下一个关键词或开头', feedback: '不必先写出完整答案。一个关键词也许能接住想法；它是否适合你，需要在真实情境里再试。' },
        { label: '说不清，我想再观察一下', feedback: '暂时说不清也可以。先留意那个想开口又停下的瞬间，可能比急着给自己贴标签更有帮助。' }
      ],
      takeaway: {
        title: '一个想法，可能需要一座小桥。',
        text: '刚才的选择不是对表达能力的判断。语言准备、讨论节奏、同伴关系与被评价的感受，都可以成为后续追问的线索。',
        question: '我需要的，是更多词汇，还是一个更容易进入讨论的时机？'
      },
      suggestedTopic: 'speaking'
    },
    {
      id: 'following',
      title: '我还没跟上刚才的英文指令',
      subtitle: '听见了不少词，却不确定下一步要做什么。',
      scene: '大家开始移动椅子、翻开阅读材料。你听到了 “compare”，却没听清要比较什么，以及要和谁一起做。',
      question: '此刻，你更想先获得哪一种信息？',
      choices: [
        { label: '把任务步骤写在屏幕上', feedback: '把口头指令变成可回看的步骤，可能帮助定位遗漏的信息。这是可探索的支持方式，还不是对本群体有效性的结论。' },
        { label: '确认一下：我们现在要做什么？', feedback: '澄清任务本身也是参与。可以试试 “Could you clarify what we should compare?”，再看这句话是否真的帮你进入任务。' },
        { label: '还不确定哪里没跟上', feedback: '你不需要立刻找出原因。可以把问题拆小：是关键词、语速，还是不熟悉课堂流程？这些都值得进一步了解。' }
      ],
      takeaway: {
        title: '听见英文，和理解任务，是两件可以分别观察的事。',
        text: '这一刻不必被归结为“英语不好”。研究可以继续问：信息是在哪里断开的，什么形式的说明更容易被使用？',
        question: '如果同样的指令写下来，我会更清楚下一步吗？'
      },
      suggestedTopic: 'listening'
    },
    {
      id: 'trying',
      title: '我愿意先试着说一点',
      subtitle: '不一定完整，但想把自己的看法放进讨论。',
      scene: '你说出第一句话。另一位同学问 “Why do you think so?”，讨论从表达观点走向了解理由。',
      question: '接下来，你更想怎样把对话继续下去？',
      choices: [
        { label: '用一个具体例子解释', feedback: '一个例子可以让别人看到你为什么这样想。也可以观察：你是在举例时更自在，还是在解释概念时更自在？' },
        { label: '先确认自己理解了对方的问题', feedback: '可以先问 “Do you mean…?”。确认理解为双方留下协商意思的空间，并不要求一次就说得完整。' },
        { label: '还没想好，想多一点时间', feedback: '愿意发言和随时有答案并不相同。请求一点思考时间，也可以是参与讨论的方式。' }
      ],
      takeaway: {
        title: '敢于开口之后，也还有值得理解的经历。',
        text: '表达观点、解释理由、回应他人和协作讨论，可能需要不同的支持。一次顺利的发言，也不能代表所有课堂里的感受。',
        question: '什么让这一次交流得以继续？换一个话题或小组，还会一样吗？'
      },
      suggestedTopic: 'academic'
    },
    {
      id: 'imagining',
      title: '我还没有经历过这样的课堂',
      subtitle: '可以从想象开始，也可以先听听这个问题。',
      scene: '这是一间模拟课堂，你不需要假装拥有某种经历。先看看：老师抛出一个开放问题，没有标准答案，也没有固定的发言顺序。',
      question: '如果你下次进入这样的课堂，最想提前知道什么？',
      choices: [
        { label: '课前到底要准备到什么程度', feedback: '这是一个很具体的起点。你可以先探索课前准备：阅读、记下一点看法、带着一个问题进入课堂。' },
        { label: '听不懂或说不出时可以向谁求助', feedback: '支持资源需要在具体学校和课程里确认。可以先留意课程教师、同伴和学习支持部门各自能提供什么。' },
        { label: '暂时没有想法，先看看其他情境', feedback: '可以自由浏览，不需要完成每一个选择。你也可以在探索后回来，看看最初的问题有没有变化。' }
      ],
      takeaway: {
        title: '没有经历，也可以带着好奇进入。',
        text: '你的想象不等于真实经历。本原型把两者分开，希望未来的研究也能认真区分预期、回忆与具体发生的事情。',
        question: '我对全英文课堂的期待，来自哪里？'
      },
      suggestedTopic: 'preparing'
    }
  ],
  topics: [
    {
      id: 'listening',
      number: '01',
      tabLabel: '听懂指令',
      title: '听见了，然后要做什么？',
      english: 'Following instructions',
      quote: 'In pairs, compare the two arguments. Be ready to explain your choice.',
      context: '模拟情境：老师说完任务，同学已经开始讨论。你可以重新看一遍这句话。',
      question: '你想先把哪一块信息弄清楚？',
      choices: [
        { label: '要和谁一起做', feedback: '“In pairs” 指两人一起。先确认合作方式，也许能让你找到讨论的起点。' },
        { label: '要完成什么任务', feedback: '这里需要比较两个论点，并准备解释自己的选择。听懂单词之外，还要把信息整理成行动。' },
        { label: '我会直接请求再说明一次', feedback: '可以试试 “Could you repeat the task, please?”，或只澄清遗漏的部分。哪一种方式更容易使用，值得在真实课堂里观察。' }
      ],
      insight: {
        label: '可尝试的做法',
        title: '把指令拆成三个小问题',
        body: '先找行动，再找对象和产出。这个拆分只是辅助理解的尝试，不是听力水平测试。',
        steps: ['和谁一起？个人、两人，还是小组。', '做什么？比较、解释、讨论，还是总结。', '最后需要什么？一个观点、一份笔记，还是口头汇报。'],
        source: null
      },
      researchQuestion: '口头说明、书面步骤和同伴示范，分别会怎样影响学生理解课堂任务？'
    },
    {
      id: 'speaking',
      number: '02',
      tabLabel: '开口表达',
      title: '想法已经到了，声音还没有',
      english: 'Finding a way in',
      quote: 'Does anyone see it differently?',
      context: '模拟情境：你对刚才的观点有一点不同看法，但还没找到加入对话的方式。',
      question: '如果先说一句，你更想从哪里开始？',
      choices: [
        { label: '先接住对方的观点', feedback: '可以尝试 “I see your point. I wonder if…”：先回应对方，再把自己的疑问放进去。它是一个表达支架，不是必须背下来的标准句。' },
        { label: '先讲一个具体例子', feedback: '可以尝试 “One example that comes to mind is…”：用例子打开讨论，再逐渐补充你想表达的理由。' },
        { label: '我现在更想先听一听', feedback: '先听也可以有自己的任务：记下一个赞同之处和一个疑问。是否想发言、何时发言，都需要放回具体情境理解。' }
      ],
      insight: {
        label: '参考资料 · 学习建议',
        title: '为第一句话留一个入口',
        body: 'Sussex 的学习指南建议把观点记成要点、倾听并回应，也可以请求澄清。下面三步是据此编写的原型练习，不保证减少焦虑。',
        steps: ['准备一个简短观点，不追求写成完整段落。', '记下一句适合自己的接话开头。', '课后回看：什么帮助了表达，什么仍让你停住。'],
        source: {
          title: 'University of Sussex · Presentations, seminars and group work',
          url: 'https://www.sussex.ac.uk/skills-hub/presentations-and-group-work',
          note: '学习指南，非本项目验证结果；上方三步为原型练习。'
        }
      },
      researchQuestion: '学生犹豫开口时，语言准备、讨论节奏与被评价的感受分别扮演什么角色？'
    },
    {
      id: 'preparing',
      number: '03',
      tabLabel: '课前准备',
      title: '准备到哪里，才算可以开始？',
      english: 'Before the seminar',
      quote: 'Please read the article and bring one question to the seminar.',
      context: '模拟情境：明天要讨论一篇文章。你还有二十分钟，不确定要继续查生词，还是整理自己的想法。',
      question: '这一次，你想先留下什么带进课堂？',
      choices: [
        { label: '一句自己的理解', feedback: '试着用自己的话说出文章的一个核心观点。遇到说不清的地方，可以把它变成明天要澄清的问题。' },
        { label: '一个具体的问题', feedback: '问题不需要宏大。它可以是某个论据为什么成立，也可以是作者没有解释清楚的一个概念。' },
        { label: '还没读完，想先找到重点', feedback: '可以先核对课程要求、标题与段落结构，判断本次讨论最需要理解的部分。这个尝试不能替代教师明确布置的阅读任务。' }
      ],
      insight: {
        label: '参考资料 · 学习建议',
        title: '一页纸，也可以装下课前准备',
        body: 'Kent 的学习指南建议回看笔记、完成指定阅读、准备简短摘要和澄清问题。下面的“一页纸”是原型练习，请按具体课程要求调整。',
        steps: ['一句话：文章主要在讨论什么？', '一个位置：标出支持或挑战观点的段落。', '一个问题：带着尚未想清楚的地方进入课堂。'],
        source: {
          title: 'University of Kent · Learning from seminars',
          url: 'https://student.kent.ac.uk/studies/learning-from-seminars',
          note: '学习指南，非本项目验证结果；一页纸结构为原型练习。'
        }
      },
      researchQuestion: '学生如何判断自己“准备好了”？教师和学生对准备的期待是否一致？'
    },
    {
      id: 'academic',
      number: '04',
      tabLabel: '学术过渡',
      title: '从“我觉得”，到“我的理由是”',
      english: 'Into academic English',
      quote: 'What evidence supports your view?',
      context: '模拟情境：你已经表达了看法，现在需要让别人理解自己的理由和依据。',
      question: '你想先给这个观点补上什么？',
      choices: [
        { label: '阅读材料中的一个依据', feedback: '可以指向一个具体段落，并说明它怎样支持你的观点。引用材料之后，仍需要把中间的理由说出来。' },
        { label: '一个来自生活的例子', feedback: '个人例子能够说明你的思考起点，但不能单独证明所有人都如此。可以说明它适用的范围，再与材料对照。' },
        { label: '承认还有不确定的地方', feedback: '可以说出观点的边界：“This may depend on…” 或 “I’m not sure whether…” 。把不确定性讲清楚，也为后续讨论留下空间。' }
      ],
      insight: {
        label: '参考资料 · 概念说明',
        title: '学术英语，不只是更难的单词',
        body: 'British Council 把学术英语（EAP）说明为在学习与研究情境中恰当地使用语言，涉及讨论、阅读、写作等任务。下面三步是原型中的表达练习。',
        steps: ['先说观点：我目前怎样理解这个问题。', '再说依据：我从哪里得出这个理解。', '留下边界：什么仍不确定，哪些情况可能不同。'],
        source: {
          title: 'British Council · English for Academic Purposes',
          url: 'https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/teaching-english-academic-purposes-eap',
          note: '概念说明，非水平诊断；三步表达结构为原型练习。'
        }
      },
      researchQuestion: '从基础英语走向学术任务时，学生最需要支持的是语言、学科知识，还是对任务规则的理解？'
    },
    {
      id: 'support',
      number: '05',
      tabLabel: '寻找支持',
      title: '需要帮助的时候，可以找谁？',
      english: 'Finding support',
      quote: 'I know I need some help. I’m just not sure where to start.',
      context: '模拟情境：这一周的阅读和课堂讨论让你有点吃力。你想找支持，但还不确定自己需要什么。',
      question: '你最想先谈清楚哪一件事？',
      choices: [
        { label: '这门课究竟期待我做到什么', feedback: '可以把一个具体任务带给课程教师，询问要求、示例与反馈方式。先厘清期待，有助于把“有点吃力”变成可讨论的问题。' },
        { label: '别人是怎样准备这类讨论的', feedback: '可以和愿意交流的同伴比较准备过程。别人的方法是经验线索，是否适合自己仍需尝试，也不必把差异理解为优劣。' },
        { label: '我暂时说不清自己的需要', feedback: '可以先选一个最近卡住的任务，描述当时发生了什么。学校是否有语言或学习支持服务，需要查看本校实际信息。' }
      ],
      insight: {
        label: '可尝试的做法',
        title: '从一个具体卡点开始求助',
        body: '原型不假定每所学校都有同样的资源。下面是一份查找方向，不是已经确认可用的服务清单。',
        steps: ['课程教师：确认任务要求、评价标准和反馈。', '同伴交流：了解不同的准备过程与可借鉴的经验。', '本校支持部门：核实是否提供语言、写作或学习方法支持。'],
        source: null
      },
      researchQuestion: '支持资源是不存在、不容易找到，还是即使知道也不容易使用？'
    }
  ],
  journals: [
    {
      number: '01',
      date: '2026.10.29',
      status: '研究者手记',
      title: '我也在这间教室里',
      summary: '从身处其中的经验出发，但不把自己的感受当作所有人的答案。',
      paragraphs: [
        '我也是身处中外合作办学学习环境的学生。发起这项研究，是想在理解自身经历的同时，认真了解其他学生怎样经历英语学习的过渡。',
        '自己的经验可以帮助我提出问题，也可能让我过早以为已经理解。于是，我想先做一个可以探索情境的空间：让不同感受有机会出现，也让与我不同的经历能够被看见。',
        '目前，我们正在探索课堂指令、开口表达、seminar 准备、学术英语过渡和支持资源。这些是初步研究方向，不代表我们已确认每一位学生都有相同困难。',
        '这一版只有模拟情境与示例反馈，还没有形成调查发现，也没有放入参与者原话或访谈材料。希望它先帮助研究小组讨论：我们究竟应该怎样问，才能更好地听见真实经验？'
      ]
    },
    {
      number: '02',
      date: '2026.10.29',
      status: '开放问题',
      title: '沉默，能说明什么？',
      summary: '相似的课堂表现，背后也许是不同的处境。现在还没有答案。',
      paragraphs: [
        '一个学生在讨论中没有发言，可能是在思考、没有找到进入的时机，也可能是还没理解任务。仅凭沉默，我们不能替他解释原因。',
        '我们想继续问：同一个人在不同课程、小组和话题中的感受，会不会变化？学生、教师对“参与”的理解是否一致？哪些支持方式是学生真正愿意使用的？',
        '这些仍是研究问题与待验证的想法。后续需要依靠经过妥善设计的研究，了解具体经历及其差异，不能从这份原型的选项中直接推出结论。'
      ]
    },
    {
      number: '03',
      date: '2026.10.29',
      status: '后续计划',
      title: '先让问题更好，再走近真实经验',
      summary: '从小组试用开始，逐步完善问题、研究方法与参与方式。',
      paragraphs: [
        '第一步，邀请研究小组试用原型，讨论哪些情境贴近经验，哪些措辞暗含了假设，哪些选择没有留出足够空间。此处描述的是计划，不是已经完成的活动。',
        '第二步，在课程和研究规范下完善研究设计。若后续开展正式调查或访谈，需要先明确知情同意、参与者退出方式、资料使用范围与保护方式。当前网页不承担正式数据收集。',
        '第三步，根据实际研究进展更新手记。未来若出现阶段性发现，应说明材料来源、研究方法、适用范围与局限，并把发现与研究者解释分别写清楚。'
      ]
    }
  ]
};
