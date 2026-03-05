type CardProps = {
    num: number;
    title: string;
    desc: string;
    children: React.ReactNode;
}
export default function Card({num,title,desc,children}:CardProps) {
    return(
        <div className="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center mb-4 gap-3 ">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">{num}</span>
            </div>
            <div className=" ">
                <h1 className="text-xl font-medium">{title}</h1>
                <p className="text-sm text-slate-600">{desc}</p>
            </div>
          </div>
          {children}
        </div>
    )
}