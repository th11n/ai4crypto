export default function Background() {
  return (
    <div>
        <div className="hidden md:block absolute top-[-200px] left-[-200px] w-96 h-96 rounded-full blur-[200px] bg-gradient-to-r from-violet-600 to-indigo-600"></div>
        <div className="hidden md:block absolute bottom-0 left-[-200px] w-96 h-96 rounded-full blur-[200px] bg-gradient-to-r from-violet-600 to-indigo-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[200px] bg-indigo-500"></div>
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-96 h-96 rounded-full blur-[300px] bg-indigo-500 z-0"></div>
    </div>
  );
}