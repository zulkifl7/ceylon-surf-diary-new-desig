export default function OurStoryPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl text-center py-20 mb-20 font-jedira tracking-wide">
          OUR STORY
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden sticky top-32">
            <img
              src="https://images.pexels.com/photos/1654500/pexels-photo-1654500.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Surfing in Sri Lanka"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed font-poppins mb-4" style={{ lineHeight: '1.8' }}>
                Hi, I'm <span className="font-semibold">Chamalka Srimal</span>, the eye behind <span className="font-semibold">Ceylon Surf Diary</span>.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed font-poppins" style={{ lineHeight: '1.8' }}>
                I've always been drawn to the ocean — the rhythm of the waves, the energy of surfers, and the fleeting moments that make each ride unique. With my camera, I aim to capture those raw, authentic moments, turning them into lasting memories.
              </p>

              <p className="text-gray-700 leading-relaxed font-poppins" style={{ lineHeight: '1.8' }}>
                Based in Weligama, Down South Sri Lanka, I specialize in surf photography that's clean, minimal, and timeless — from dynamic in-water action shots to relaxed lifestyle moments on the beach. Every session is about celebrating the surf, the people, and the ocean.
              </p>

              <p className="text-gray-700 leading-relaxed font-poppins" style={{ lineHeight: '1.8' }}>
                Whether it's a solo ride, a session with friends, or candid lifestyle shots, my goal is to make every surfer feel confident, free, and truly captured in their element.
              </p>

              <p className="text-gray-700 leading-relaxed font-poppins" style={{ lineHeight: '1.8' }}>
                At Ceylon Surf Diary, it's not just photography — it's the story of your waves, your journey, and your moments in the sun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
