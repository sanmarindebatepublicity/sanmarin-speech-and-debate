#!/usr/bin/env ruby
require 'webrick'

root = File.expand_path(__dir__)
port = 3000

# WEBrick omits several modern MIME types — add them explicitly
%w[json application/json
   mjs  application/javascript
   svg  image/svg+xml
   woff font/woff
   woff2 font/woff2].each_slice(2) { |ext, type| WEBrick::HTTPUtils::DefaultMimeTypes.store(ext, type) }

server = WEBrick::HTTPServer.new(
  Port: port,
  DocumentRoot: root,
  AccessLog: [],
  Logger: WEBrick::Log.new($stdout, WEBrick::Log::INFO)
)

puts "\nSan Marin Debate — serving at http://localhost:#{port}"
puts "Press Ctrl+C to stop.\n\n"

trap('INT') { server.shutdown }
server.start
