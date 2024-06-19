import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <div id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}

    <div className="grid md:grid-cols-4 gap-12">
      <div className="relative col-span-1 hidden md:block">
        <Image
          fill
          alt="Selfie Boy"
          src="/images/about-me/selfie-boy.svg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>Hey there!</p>

        <p>
          Hello! I&apos;m Kiran Pusuluri, an avid , based in Hyderabad. This website is a little window into my world where I share my thoughts, projects, and passions.
        </p>

        <p>
        A bit about me: I have a deep love for API development , and I spend a lot of my free time in reading and exploring new technologies. 
        I believe in technology , and I strive to bring a bit of something positive into everything I do.
        </p>

       <p>
       I&apos;m a passionate badminton player and an ardent fan of the sport. I draw immense inspiration from legends like Lee Chong Wei, Viktor Axelsen, and Srikanth Kidambi. Whether I&apos;m on the court or off, badminton is a huge part of my life, driving my dedication and enthusiasm
        </p>

        <p>
        Here you&apos;ll find  blog posts, projects, photos. I hope you find something here that inspires you or makes you think.
        Thank you for stopping by, and don&apos;t hesitate to reach out if you want to connect! 
          <a href="#contact"> contact section</a> below and send me a text. I would love to hear from you!
        </p>
        
      </div>
    </div>
  </div>
);

export default AboutMe;
