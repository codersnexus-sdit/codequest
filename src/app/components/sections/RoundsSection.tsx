'use client';
import { motion } from 'framer-motion';
import { Code, Users, Trophy, Presentation, Clock, Target } from 'lucide-react';

export default function RoundsSection() {
  const rounds = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Round 1: Ideation",
      subtitle: "Problem Statement Selection",
      description: "Choose from 10+ real-world problem statements across domains like FinTech, HealthTech, EdTech, and Sustainability. Present your approach to judges.",
      duration: "3 hours",
      participants: "All teams",
      activities: ["Problem statement analysis", "Solution approach presentation", "Initial judging"],
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Round 2: Development",
      subtitle: "Build Your Solution",
      description: "48 hours of intensive development. Build prototypes, create MVP, and implement your innovative solution with mentor guidance.",
      duration: "36 hours",
      participants: "Selected 100 teams",
      activities: ["Prototype development", "Mentor sessions", "Technical workshops"],
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Presentation className="w-10 h-10" />,
      title: "Round 3: Pitch & Demo",
      subtitle: "Showcase Your Innovation",
      description: "Present your working solution to industry experts. Demonstrate impact, technical implementation, and business viability.",
      duration: "4 hours",
      participants: "Top 20 teams",
      activities: ["Live demonstrations", "Investor pitch", "Q&A with judges"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Final: Awards",
      subtitle: "Recognition & Prizes",
      description: "Winners announcement across multiple categories, prize distribution, and networking with industry leaders and investors.",
      duration: "2 hours",
      participants: "All finalists",
      activities: ["Award ceremony", "Networking session", "Feedback from judges"],
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <section id="rounds" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Competition Rounds
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four exciting rounds designed to test your creativity, technical skills, and presentation abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {rounds.map((round, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${round.color}`}>
                  <div className="text-white">{round.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{round.title}</h3>
                  <p className="text-purple-300 font-medium">{round.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{round.description}</p>

              {/* Round Details */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-400">Duration</span>
                  </div>
                  <div className="text-white font-semibold">{round.duration}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-400">Participants</span>
                  </div>
                  <div className="text-white font-semibold">{round.participants}</div>
                </div>
              </div>

              {/* Activities */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Activities</h4>
                <ul className="space-y-2">
                  {round.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}