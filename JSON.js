const playCards = [
    {
        "id": 1,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2022/07/GEN-MostPopular2022-1290x860REV-1.jpg",
        "title": "Managers are seeking ways to improve employee well-being and build a strong workplace culture.",
        "para": "Recent Gallup data indicates that in 2022, companies and managers remain challenged by the task of raising employee engagement to pre-pandemic levels. The Great Resignation has demonstrated the power of employees to vote with their feet, and a resurgence of the labor movement in the U.S. has put pressure on even top-tier companies to improve working conditions."
    }, {
        "id": 2,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/05/Kesari-1290x860-1.jpg",
        "title": "Building a Data-Driven Culture: Three Mistakes to Avoid",
        "para": "When one of the largest global telecom companies grappled with high customer attrition, the marketing team used a heuristics-driven approach to retain customers. For example, if a customer hadn’t made any outgoing calls in three weeks, the company would roll out a promotion."
    }, {
        "id": 3,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/08/Duarte-Presenting-1290x860-1.jpg",
        "title": "Are Your Presentations Too Emotional — or Too Analytical?",
        "para": "When you have the opportunity to connect with an audience, stating fact after fact is not the way to go. You have an opportunity to connect more deeply than you can with just facts. Granted, some presentations are solely to convey updated information. But if that’s the case, you’re probably better off just emailing the particulars and saving everyone time. The best use of a presentation is to motivate others."
    }, {
        "id": 4,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/07/Laker-Contrapower-1290x860-1.jpg",
        "title": "When Subordinates Sabotage You",
        "para": "Contrapower harassment, a seldom-discussed form of workplace harassment, turns traditional power dynamics on its head. This scenario, in which individuals with less authority target those in higher positions, challenges the notion that only those in power can be harassers and underscores the complexity and multidirectional nature of abusive behavior in the workplace. "

    },
    {
        "id": 5,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/07/Davenport-Bean-Bank-1290x860-2.jpg",
        "title": "vThis Canadian bank has become known for developing AI tools that are both innovative and responsible.",
        "para": "We think it would be helpful to describe how an AI use case that’s both innovative and responsible came about, and how a particular AI use case reflects the culture in which it’s developed. We last wrote about Scotiabank in 2021, but a lot has changed since then — and not just the advent of generative AI.Get Updates on Leading With AI an"
    }, {
        "id": 6,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/07/Elliot-1290x860-1.jpg",
        "title": "Hybrid Work: How Leaders Build In-Person Moments That Matter",
        "para": "What does work, then? While headlines make it sound like it’s a battle to get people out of their home offices (even if the office is a closet), three years of data from Future Forum shows that the vast majority of people want to gather together, anywhere from a few days a week to once a month — but they want that in-office time to be purpose-driven."
    }, {
        "id": 7,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/06/Swift-1290x860-1.jpg",
        "title": "Banish the Harmful Creatures of COVID-Era Work",
        "para": "During the intense days of the pandemic, leaders let some animals into the house. While we innovated in real time and found new ways to connect and be productive under unimaginable constraints, we also made space for some pretty feral ways of working. We tolerated and encouraged working practices that, in the morning light of the post-COVID era, don’t look terribly effective, civil, or logical … or all the above."
    }, {
        "id": 8,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/02/Swift-1290x860-1.jpg",
        "title": "Warm Hearts, Cold Reality: How to Build Team Empathy",
        "para": "When we stop maligning dogs, sharks, and schoolboys, studies on human nature show us to be pretty nice beings, at the core. One large-scale study showed that in a situation where generosity was being tested, people’s first impulses were unselfish ones: When people made up their minds quickly, they were more likely to share a pot of money.2 Wanting to do the right thing is hardwired into us from infancy; babies will pick a puppet that seems to help other puppets over a puppet that seems to behave cruelly, for example."
    },
    {
        "id": 9,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/08/Gratton-1290x860-1.jpg",
        "title": "Seven Truths About Hybrid Work and Productivity",
        "para": "n mid-July, I and my research team at HSM ran a research webinar on the topic of productivity, in part to explore how the definition and measurement of productivity are shifting and what these changes mean for individuals, managers, teams, and organizational design. More than 200 people, mostly in human resources and primarily at the managerial level, participated. It was a small but diverse sample, representing 79 organizations and 28 countries. Using quantitative polling during the session, we dug into the current situation."
    }, {
        "id": 10,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/06/Elliot-1290x860-1.jpg",
        "title": "Younger workers want virtual and in-person touch points with the middle managers just above them. Here’s how to do hybrid better — without return-to-office mandates",
        "para": "This is a challenge for companies that are still trying to work out the best types of workplaces, policies, and models for interaction to support a thriving culture — and, perhaps most importantly, serve the learning and development needs of younger generations. G "
    }, {
        "id": 11,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/03/Elliot-1290x860e.jpg",
        "title": "Return-to-Office Mandates: How to Lose Your Best Performers",
        "para": "Recent return-to-office (RTO) mandates like those at UPS and Boeing have a simple message: Come back to the office five days a week. CEOs cite productivity as a core reason for these proclamations, even in the face of employee resistance. Many executives simply don’t trust that employees are as effective as possible when managers can’t see them at their desks"
    }, {
        "id": 12,
        "img": "https://sloanreview.mit.edu/wp-content/uploads/2024/06/Winston-AI-Sustainability-1290x860-1.jpg",
        "title": "Will AI Help or Hurt Sustainability? Yes",
        "para": "The proverbial ship of artificial intelligence is moving ahead at warp speed, icebergs and societal risks be damned. The pace of change in what it can do is staggering. Breathless predictions say AI will add trillions of dollars to the economy through massive cost savings and entirely new products and markets."
    },
    {
        "id": 13,
        "img": "https://jamesclear.com/wp-content/uploads/2016/07/five-step-creative-process-960x617.jpg",
        "title": "For a More Creative Brain Follow These 5 Steps",
        "para": "Anyone can learn to be creative by using these five steps. That’s not to say being creative is easy. Uncovering your creative genius requires courage and tons of practice. However, this five-step approach should help demystify the creative process and illuminate the path to more innovative thinking."
    }, {
        "id": 14,
        "img": "https://jamesclear.com/wp-content/uploads/2015/09/memoirs-of-sir-isaac-newtons-life-by-william-stukeley.jpg",
        "title": "Creativity Is a Process, Not an Event",
        "para": "Creative thinking requires our brains to make connections between seemingly unrelated ideas. Is this a skill that we are born with or one that we develop through practice? Let’s look at the research to uncover an answer."
    }, {
        "id": 15,
        "img": "https://jamesclear.com/wp-content/uploads/2023/04/footer-atomic@2x.png",
        "title": "How Experts Figure What to Focus On",
        "para": "I launched my first product without having any idea who I would sell it to. (Big surprise, nobody bought it.) I reached out to important people, mismanaged expectations, made stupid mistakes, and essentially ruined the chance to build good relationships with people I respected. I attempted to teach myself how to code, made one change to my website, and deleted everything I had done during the previous three months."
    }, {
        "id": 16,
        "img": "https://jamesclear.com/wp-content/uploads/2018/10/Audrey-Hepburn-by-Bud-Fraker-1956.jpg",
        "title": "When the 80/20 Rule Fails: The Downside of Being Effective",
        "para": "Audrey Hepburn was an icon.Rising to fame in the 1950s, she was one of the greatest actresses of her era. In 1953, Hepburn became the first actress to win an Academy Award, a Golden Globe Award, and a BAFTA Award for a single performance: her leading role in the romantic comedy Roman Holiday."
    }
];