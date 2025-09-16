'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Presentation } from 'lucide-react';

export default function EventFlowSection() {
  const timeline = [
    {
      time: "Day 1 - 9:00 AM",
      title: "Registration & Welcome",
      description: "Check-in, team formation, and opening ceremony",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-400 to-blue-500"
    },
    {
      time: "Day 1 - 11:00 AM",
      title: "Ideation Begins",
      description: "Brainstorm ideas, finalize teams, and start planning",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-blue-400 to-purple-500"
    },
    {
      time: "Day 1 - 2:00 PM",
      title: "Development Phase",
      description: "48 hours of intensive coding and building",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      time: "Day 2 - All Day",
      title: "Build & Mentor",
      description: "Continue development with mentor guidance",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-pink-400 to-red-500"
    },
    {
      time: "Day 3 - 10:00 AM",
      title: "Final Presentations",
      description: "Present your solutions to judges and audience",
      icon: <Presentation className="w-6 h-6" />,
      color: "from-red-400 to-orange-500"
    },
    {
      time: "Day 3 - 4:00 PM",
      title: "Awards & Closing",
      description: "Winners announcement and networking session",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-400 to-yellow-500"
    }
  ];

  return (
    <section id="flow" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-600 bg-clip-text text-transparent">
            Event Flow
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here's how the 3-day innovation marathon will unfold
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-yellow-500 opacity-30"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-sm text-purple-300 mb-2">{item.time}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}