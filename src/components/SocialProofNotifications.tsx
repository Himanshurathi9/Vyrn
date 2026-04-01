import React, { useEffect, useState } from 'react';

const NOTIFICATIONS = [
  { icon: '🔥', text: 'Lumina Fashion — 1.2M views on latest reel', color: 'bg-orange-500' },
  { icon: '✅', text: 'Spice Garden — New client booking via Instagram', color: 'bg-green-500' },
  { icon: '📈', text: 'Coach Aryan — 47 new students this month', color: 'bg-blue' },
  { icon: '💬', text: "New DM received: 'How do I hire you?'", color: 'bg-cosmic-purple' },
  { icon: '🚀', text: 'Client reel just hit 500K views', color: 'bg-red-500' },
  { icon: '⭐', text: 'New 5-star review from a restaurant client', color: 'bg-cosmic-gold' },
  { icon: '📱', text: '14 reels published for clients today', color: 'bg-indigo-500' },
];

export function SocialProofNotifications() {
  const [currentNotif, setCurrentNotif] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const showNotification = () => {
      const randomNotif = Math.floor(Math.random() * NOTIFICATIONS.length);
      setCurrentNotif(randomNotif);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      const nextInterval = Math.floor(Math.random() * 4000) + 8000;
      setTimeout(showNotification, nextInterval);
    };

    const initialTimeout = setTimeout(showNotification, 5000);
    return () => clearTimeout(initialTimeout);
  }, []);

  if (currentNotif === null) return null;

  const notif = NOTIFICATIONS[currentNotif];

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'} hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/20 max-w-[320px]`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] shrink-0 ${notif.color} text-white`}>
        {notif.icon}
      </div>
      <p className="text-[13px] text-navy font-medium leading-tight">
        {notif.text}
      </p>
    </div>
  );
}
