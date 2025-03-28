import React from 'react';
import { BookOpen, Briefcase, GraduationCap, Trophy, Users2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Meet Professor Elias Voss</h2>
          <p className="text-xl text-base-content/70">
            Bridging the gap between theoretical AI and real-world applications through expert education and industry experience
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Profile Image Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  alt="Professor Elias Voss"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-base-100 p-6 rounded-2xl shadow-xl border border-base-300">
                <div className="flex items-center gap-4">
                  <Trophy className="w-12 h-12 text-primary" />
                  <div>
                    <p className="font-bold text-2xl">15+ Years</p>
                    <p className="text-base-content/70">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Column */}
          <div className="lg:col-span-7">
            <div className="grid gap-8">
              {/* Academic Excellence */}
              <div className="card bg-base-200 hover:shadow-lg transition-all duration-300">
                <div className="card-body p-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
                      <p className="text-base-content/70 leading-relaxed">
                        Ph.D. in Artificial Intelligence from EPFL Lausanne, with a focus on machine learning and neural networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Impact */}
              <div className="card bg-base-200 hover:shadow-lg transition-all duration-300">
                <div className="card-body p-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Industry Impact</h3>
                      <p className="text-base-content/70 leading-relaxed">
                        Former Senior AI Researcher and Consultant, helping businesses implement AI solutions across various sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teaching Philosophy */}
              <div className="card bg-base-200 hover:shadow-lg transition-all duration-300">
                <div className="card-body p-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Teaching Philosophy</h3>
                      <p className="text-base-content/70 leading-relaxed">
                        Combines theoretical foundations with practical applications, ensuring students gain real-world AI expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Positions */}
              <div className="card bg-base-200 hover:shadow-lg transition-all duration-300">
                <div className="card-body p-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Academic Positions</h3>
                      <p className="text-base-content/70 leading-relaxed">
                        Lecturer at UNIL Lausanne & EPFL Lausanne, regular speaker at international AI summits and conferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}