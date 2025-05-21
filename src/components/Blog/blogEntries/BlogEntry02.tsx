import {
  burj_khalifa,
  rob_thomas_watsonx,
  dario_gil_quantum,
  souk_tour,
  spice_market,
  rh_session1,
  rh_session2,
  rh_session3,
  leaving_dubai,
} from "@/assets/blog-entry-02";
import {
  BlogContainer,
  Heading1,
  Heading2,
  ImageContainer,
  ImageDescription,
  Paragraph,
  Quote,
  Subtitle,
  Title,
} from "./components";
import { Center } from "@/components";

const BlogEntry02 = () => {
  return (
    <BlogContainer>
      <Title content="IBM Tech 2024 Conference" />
      <Subtitle content="Insights from IBM Tech 2024 Conference" />
      <Heading1 content="The Conference’s Theme" />
      <Paragraph>
        I recently received an invitation to the IBM Tech 2024 conference. IBM
        Tech is a technical recognition program launched by Arvind Krishna back
        in 2023. Being invited to this event represents one of the most notable
        technical recognitions within IBM. Consequently, I felt deeply honored.
        Moreover, I was really excited as this would be my very first experience
        attending a professional IT conference in person.
      </Paragraph>
      <Center py={8}>
        <ImageContainer>
          <img
            src={burj_khalifa}
            alt="Burj Khalifa"
            width={"500px"}
            height={"700px"}
          />
          <ImageDescription description="Dubai, Burj Khalifa" />
        </ImageContainer>
      </Center>
      <Paragraph>
        The conference took place in the captivating city of Dubai, drawing
        attendees from various corners of the globe. I had the privilege of
        participating in the second wave of the event, spanning from the 5th to
        the 8th of March. The opening plenary session, a pivotal moment of the
        conference, commenced on the 6th of March.
      </Paragraph>
      <Paragraph>
        Regrettably, Arvind was unable to attend the conference in person.
        Nonetheless, he greeted us through a video message, extending his
        congratulations and conveying the overarching theme of the event, which
        can also be interpreted as IBM’s (and perhaps the world’s) current
        strategy: “Perfection is the enemy of good.”
      </Paragraph>
      <Paragraph>
        This sentence got me thinking a lot. We live in a fast-paced world
        characterized by rapid change, meaning that swift adaptation becomes
        essential. However, it’s crucial to maintain focus and consistency as
        well to stay on track. On the other hand, you must also be willing to
        take risks and sacrifice perfection to craft something valuable and
        beneficial for our clients.
      </Paragraph>
      <Center py={8}>
        <ImageContainer>
          <img
            src={rob_thomas_watsonx}
            alt="Rob Thomas, WatsonX"
            width={"700px"}
            height={"500px"}
          />
          <ImageDescription description="Opening plenary session: Rob Thomas talking about watsonx" />
        </ImageContainer>
      </Center>
      <Paragraph>
        During the plenary session, we had some exhilarating presentations
        covering a range of topics including AI, Quantum, Infrastructure,
        Security, and Mainframe. While I won’t delve into the specifics, I would
        like to highlight Dario Gil’s session, as for me it was particularly
        captivating. Dario introduced us to the thrilling prospects of quantum
        technology and the future opportunities it holds for IBM.
      </Paragraph>
      <Center py={8}>
        <ImageContainer>
          <img
            src={dario_gil_quantum}
            alt="Dario Gil, Quantum"
            width={"700px"}
            height={"500px"}
          />
          <ImageDescription description="Opening plenary session: Dario Gil’s talking about Quantum and AI" />
        </ImageContainer>
      </Center>
      <Paragraph>
        As far as I’m concerned, I was somewhat astonished by the potential of
        Quantum combined with AI to accelerate development and shape trends,
        especially considering the already fast-paced nature of our world.
      </Paragraph>
      <Heading1 content="The Recreational Activity" />
      <Paragraph>
        After the plenary session, we enjoyed a delightful lunch at the Grand
        Hyatt. However, it wasn’t just about dining; it was primarily an
        opportunity for networking with colleagues from various departments and
        domains. Networking played a pivotal role throughout the event. I had
        the chance to meet numerous individuals during the sessions as well as
        during lunch and dinner.
      </Paragraph>
      <Paragraph>
        After enjoying lunch with other IBMers/Red Hatters, we participated in a
        recreational activity. Various options were available, including a Burj
        Khalifa tour and a water explorer tour. Personally, I was invited to the
        souk explorer tour, which took us to a traditional market in the old
        town of Dubai. It was an exciting program, offering insight into the
        lifestyle of people outside Dubai’s city center and providing valuable
        cultural experiences within the market. Exploring the spice market and
        the gold market was particularly fascinating, as was witnessing almost
        infinite amount of merchandise available.
      </Paragraph>
      <Center py={8} gap={8}>
        <ImageContainer>
          <img
            src={souk_tour}
            alt="Souk Tour"
            width={"700px"}
            height={"500px"}
          />
          <ImageDescription description="Souk Tour" />
        </ImageContainer>
        <ImageContainer>
          <img
            src={spice_market}
            alt="Spice Market"
            width={"500px"}
            height={"700px"}
          />
          <ImageDescription description="Spice Market" />
        </ImageContainer>
      </Center>
      <Heading1 content="The Sessions" />
      <Paragraph>
        The sessions covered several hot topics: AI, Infrastructure/DevOps,
        Quantum, Security, and the intersection of these, especially the first
        two. As a DevOps specialist, I primarily registered for DevOps and
        Security-related sessions. However, these sessions almost always touched
        on the topic of AI. From this, it’s easy to understand that AI is not
        only a crucial component of IBM’s strategy, but it was also emphasized
        several times during the plenary session that AI presents an
        opportunity, and competitors who overlook it will ultimately fall
        behind.
      </Paragraph>
      <Heading2 content="Artificial Intelligence" />
      <Paragraph>
        My impression was that AI is not primarily replacing tools or
        technologies. Instead, it’s mainly used to enhance them and eliminate
        repetitive tasks. This allows developers, for example, to be more
        productive and resolve issues faster than they could without AI.
      </Paragraph>
      <Paragraph>
        A good example is the Watsonx Code Assistant AI solution, primarily
        utilized for code generation based on specific inputs or for code
        translation between languages, such as converting COBOL to Java. This
        could prove extremely beneficial in the mainframe domain, where there’s
        a vast amount of code written in COBOL. Translating it to Java would
        facilitate codebase modularization, thereby enhancing its readability
        and, consequently, its reusability. In general, this would mean code
        modernization.
      </Paragraph>
      <Paragraph>
        Another noteworthy Watsonx Code Assistant use case is with Red Hat
        Ansible Lightspeed which is a code assistant for Ansible powered by
        Watsonx Code Assistant. This would make the creation of Ansible content
        more efficient by accelerating the process of generating Ansible
        workbooks, while ensuring the generation of high-quality and secure code
        that aligns with best practices and standards.
      </Paragraph>
      <Quote>
        “watsonx Code Assistant for Red Hat Ansible Lightspeed leverages
        generative AI to accelerate development while maintaining the principles
        of trust, security and compliance at its core.”
      </Quote>
      <Paragraph>
        From these examples, we can see that IBM puts significant effort into
        AI-supported development, with the goal of simplifying developers’ lives
        by reducing the learning curve to adopt new languages or frameworks and
        automating repetitive tasks. This enables developers to focus on more
        valuable tasks, resulting in a more efficient and productive development
        process. Overall, there is a strong emphasis on improving the developer
        experience.
      </Paragraph>
      <Heading2 content="Infrastructure" />
      <Paragraph>
        Automation also plays a pivotal role in modern IT, and IBM demonstrates
        a commitment to modernizing within this field. A tool that can be used
        to reliably accelerate the automation of your infrastructure is Ansible.
      </Paragraph>
      <Quote>“Ansible is the de facto language of automation.”</Quote>
      <Paragraph>
        With its agentless architecture, it offers a relatively straightforward
        approach to gaining control over multiple resources and consistently
        automating your infrastructure.
      </Paragraph>
      <Paragraph>
        During the sessions about Ansible, the team presented their aim to make
        the tool fast and accessible for beginners. As previously mentioned, to
        speed up developer onboarding and enhance code quality, they have
        started utilizing the Watsonx Code Assistant to assist developers in
        generating Ansible content. In addition to this solution, they are
        continually developing new tools and solutions to further simplify the
        lives of Ansible developers.
      </Paragraph>
      <Center py={8}>
        <ImageContainer>
          <img
            src={rh_session1}
            alt="Red Hat Session"
            width={"700px"}
            height={"500px"}
          />
          <ImageDescription description="Red Hat Session" />
        </ImageContainer>
      </Center>
      <Paragraph>
        Operationalizing AI is another significant challenge in today’s
        landscape, as highlighted in one of the sessions. It requires
        integrating AI into the daily operations of your organization,
        transitioning it from experimental stages to full-scale production. Red
        Hat introduced a new platform called Red Hat Openshift AI which aims to
        simplify and accelerate this process.
      </Paragraph>
      <Center py={8}>
        <ImageContainer>
          <img
            src={rh_session2}
            alt="Red Hat Session"
            width={"700px"}
            height={"500px"}
          />
          <ImageDescription description="Red Hat Session" />
        </ImageContainer>
      </Center>
      <Paragraph>
        OpenShift AI is an MLOps platform designed to assist developers in
        building, deploying, and managing AI-enabled applications. It was
        fascinating to learn that this platform is built on top of other
        open-source technologies. Essentially, it provides a securely configured
        and tested set of tools that enables faster production deployment of
        AI-enabled applications.
      </Paragraph>
      <Quote>
        “Red Hat OpenShift A platform for continuous development, integration,
        and deployment for AI/ML models, such as GPU support”
      </Quote>
      <Heading2 content="Security" />
      <Paragraph>
        The sessions about security primarily centered around AI. The rationale
        behind this focus is clear: AI introduces new opportunities, challenges,
        and rules, which forces us to reassess our security protocols. Two
        particularly interesting perspectives have been highlighted: leveraging
        GenAI for security and the security of GenAI.
      </Paragraph>
      <Center py={8}>
        <ImageContainer>
          <img
            src={rh_session3}
            alt="Red Hat Session"
            width={"700px"}
            height={"500px"}
          />
          <ImageDescription description="Red Hat Session" />
        </ImageContainer>
      </Center>
      <Paragraph>
        While one might assume that the adoption of AI weakens our defensive
        capabilities, the reality is quite the opposite. AI can support the
        defenders just as effectively. As a matter of fact, the importance of
        minimizing human interface latencies and prioritizing AI over human
        involvement was emphasized.
      </Paragraph>
      <Quote>
        “Protecting foundation models, generative AI, and their data sets is
        essential for enterprise-ready AI”
      </Quote>
      <Paragraph>
        When discussing Security for AI, it’s crucial to ensure that the AI
        training data remains safeguarded against theft or manipulation of
        sensitive data. Additionally, securing the model development process is
        essential, which can be achieved by running scans to identify
        vulnerabilities or security gaps and to force developers to apply
        security best practices. I believe this part could have been tied to the
        Openshift AI session. Openshift AI could indeed provide a solution for
        continuous scans and help implement security best practices.
      </Paragraph>
      <Paragraph>
        On the other hand, AI for Security serves to automate repetitive tasks,
        such as scanning logs and sending summary reports to development teams.
        Moreover, AI can analyze workflows and security groups, alerting
        developers to potential security threats. Ultimately, AI has the
        potential to respond to specific security incidents, significantly
        reducing response times.
      </Paragraph>
      <Heading1 content="Final Thoughts" />
      <Paragraph>
        The IBM Tech 2024 conference, held in Dubai, showcased the company’s
        dedication to technological innovation and advancement. With a focus on
        themes like AI, Quantum, Infrastructure, Security, and Mainframe, the
        event provided valuable insights into the future of technology and its
        impact on various industries.
      </Paragraph>
      <Paragraph>
        Overall, the conference provided a comprehensive overview of IBM’s
        technological advancements and strategies, highlighting the company’s
        commitment to driving innovation and addressing the evolving needs of
        the digital landscape.
      </Paragraph>
      <Paragraph>
        I really enjoyed the conference and my stay in the stunning city of
        Dubai. As this was my first in-person conference, it was an incredibly
        enriching experience, and I sincerely hope it won’t be my last. These
        events not only provide motivation to the invitees but also spark new
        ideas through conversations with experts from around the world. The
        opportunity to exchange insights and perspectives with peers is
        invaluable and can lead to innovative collaborations.
      </Paragraph>
      <Center py={8}>
        <ImageContainer>
          <img
            src={leaving_dubai}
            alt="Leaving Dubai"
            width={"300px"}
            height={"600px"}
          />
          <ImageDescription description="Leaving Dubai" />
        </ImageContainer>
      </Center>
    </BlogContainer>
  );
};

export default BlogEntry02;
