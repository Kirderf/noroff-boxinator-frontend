import { Button } from "./components/ui/button";

function App() {
	return (
		<div className="h-screen grid place-items-center">
			<h1 className="text-8xl flex flex-col ">
				Hello <span className="text-[#61DBFB] font-bold">React</span>
				<Button>Test</Button>
			</h1>
		</div>
	);
}

export default App;
