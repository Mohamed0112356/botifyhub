export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
        <p className="text-xl text-gray-600">Building the future of AI automation</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          At BotifyHub, we believe that artificial intelligence should be accessible to every business. 
          Our mission is to democratize AI by providing a marketplace where companies can discover, 
          deploy, and customize AI bots that solve real-world problems.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-gray-600">
          We envision a world where businesses of all sizes can leverage cutting-edge AI technology 
          without the complexity of building it from scratch. Through our platform, we're creating 
          an ecosystem where innovation meets accessibility.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-indigo-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-3">Innovation</h3>
          <p className="text-indigo-800">
            We continuously research and develop new AI capabilities to keep our platform at the forefront of technology.
          </p>
        </div>
        
        <div className="bg-green-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Quality</h3>
          <p className="text-green-800">
            Every bot in our marketplace undergoes rigorous testing to ensure reliability and performance.
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Support</h3>
          <p className="text-blue-800">
            Our dedicated support team is available 24/7 to help you succeed with our AI solutions.
          </p>
        </div>
        
        <div className="bg-purple-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">Community</h3>
          <p className="text-purple-800">
            We foster a vibrant community where developers and businesses can collaborate and innovate together.
          </p>
        </div>
      </div>
    </div>
  )
}