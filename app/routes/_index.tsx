import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    {title: "RemixJS"},
    {name: "description", content:"The Quick Brown Fox Jumps Over the Lazy Dog"}
  ]
}

export default function NewIndex() {
  return (
    <div className="text-center">
      <Link className="font-mono font-semibold" to="http://localhost:5173/category" reloadDocument>Click me to load the entire page</Link>
      <p>Using <span className="text-emerald-400 font-bold">Link</span> component in <span className="text-yellow-300 font-bold">Remix's</span>. The above reloads the entire page, using the prop "reloadDocument", and the below renders the specific part only.</p>
      {/* to load the entire page, we use reloadDocument */}
      <Link className="font-mono font-semibold" to="http://localhost:5173/category">Click me to load the desired page</Link> 
      <br/>
      <br/>
      <Link className="font-mono font-semibold" to="http://localhost:5173/posts">Take me to <span className="text-sky-300 font-bold">Posts</span></Link>
    </div>
  )
}