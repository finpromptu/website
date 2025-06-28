export default function TestPage() {
  const timestamp = new Date().toISOString();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-12 rounded-lg shadow-xl text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🚀 Test Page</h1>
        <p className="text-gray-600 mb-6">
          If you can see this page, deployments are working!
        </p>
        <div className="bg-gray-100 p-4 rounded text-sm">
          <strong>Build Time:</strong><br />
          {timestamp}
        </div>
        <div className="mt-6">
          <a 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}