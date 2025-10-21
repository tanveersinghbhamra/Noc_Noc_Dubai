import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedWeekSchedule() {
  const testimonials = [
    {
      quote:
        "Start your week on a high note! Enjoy Mad Pour Mondays with pours at just AED 20 each. From classic mixes to your favorite spirits, sip and savor without limits. Great drinks, lively beats, and the perfect start to your week await you.",
      name: "Mad Pour Mondays",
      designation: "Monday",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "It takes two to make it special! Every Tuesday, get 50% OFF your total bill (excluding draught beers and shisha). Bring your friend, your date, or your crew and make the most of an unbeatable midweek deal that’s twice as fun.",
      name: "Two's Day",
      designation: "Tuesday",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Midweek just got better! Get 4 house drinks and 1 shisha for only AED 99. A perfect mix of good company, smooth shisha, and vibrant tunes to keep your week feeling fresh and exciting.",
      name: "Wicked Wednesday",
      designation: "Wednesday",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Your weekend begins here! Get ready to Take Off with 25% OFF your total bill or a FREE shisha with your table. Set the tone for the weekend ahead with great vibes, amazing drinks, and your favorite crowd.",
      name: "Takeoff Thursdays",
      designation: "Thursday",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Turn up the energy with our Friday Bollywood Night! Dance to the latest Bollywood hits spun by our live DJ. Feel the rhythm, enjoy signatur",
      name: "DJ Bollywood Friday Night",
      designation: "Friday",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
        "The celebration continues! Saturday nights bring you another round of the best Bollywood beats with our resident DJ. It’s the perfect night to let loose, dance, and make memories that last beyond the weekend",
        name: "DJ Bollywood Saturday Night Reloaded",
        designation: "Saturday",
          src: "https://images.unsplash.com/photo-1746483965671-44ed1704e4fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900",
    },
    {
      quote:
        "For the ones who keep the city alive! Join us every Sunday for Industry Night, with a special 45% OFF for all F&B professionals. It’s your turn to relax, unwind, and enjoy the best hospitality experience at Noc Noc.",
      name: "Industry Sunday Night",
      designation: "Sunday",
      src: "https://plus.unsplash.com/premium_photo-1747907077841-155cd36c5d0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
