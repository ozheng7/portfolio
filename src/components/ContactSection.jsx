import { GithubIcon, LinkedinIcon, Mail, MapPin } from "lucide-react";
import React from "react";
import cn from "../lib/utils";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to get to know me? Feel free to contact me! I am always open to
          meeting new people.
        </p>

        <div className="gap-12 space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          {/* <div className="space-y-6 justify-center"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <div className="flex items-center space-x-4"> */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <a
                  href="mailto:oscar7zheng@gmail.com"
                  className="text-muted-foregound hover:text-primary transition-colors"
                >
                  {" "}
                  oscar7zheng@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <a className="text-muted-foregound hover:text-primary transition-colors">
                  {" "}
                  Bay Area, California
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <LinkedinIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/ozheng7"
                  target="_blank"
                  className="text-muted-foregound hover:text-primary transition-colors"
                >
                  {" "}
                  LinkedIn : ozheng7
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GithubIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <a
                  href="https://github.com/ozheng7"
                  target="_blank"
                  className="text-muted-foregound hover:text-primary transition-colors"
                >
                  {" "}
                  Github : ozheng7
                </a>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
