import heroLogo from '../assets/hero-logo.svg';

interface ComingSoonPageProps {
  title: string;
}

export default function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <img
            src={heroLogo}
            alt="Ceylon Surf Diary"
            className="w-48 mx-auto mb-8 opacity-50"
          />
          <h1 className="text-6xl md:text-7xl font-jediria mb-6 tracking-wide">
            {title}
          </h1>
          <p className="text-2xl text-gray-400 mb-4 font-poppins">
            Coming Soon
          </p>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto" style={{ lineHeight: '1.8' }}>
            We're working on something amazing for you. This section will feature exclusive content 
            and updates from Ceylon Surf Diary.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-jediria mb-4">Stay Updated</h3>
          <p className="text-gray-700 font-poppins mb-6" style={{ lineHeight: '1.8' }}>
            Be the first to know when we launch new content. Get notified about photography sessions, 
            stories, and exclusive updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-gray-800 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
