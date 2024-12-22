import Image from "next/image";

export function CardContainer ({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto w-80 bg-gray-300 h-16 flex justify-between p-4">
            {children}
            <div className="flex gap-x-4">
                <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-blue-500">
                    <Image alt="Edit icon" width={17} height={17} src="pencil.svg"/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-red-600">
                    <Image alt="Delete icon" width={17} height={17} src="trash.svg"/>
                </button>
            </div>
        </div>
    )
}