import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WineProps {
    id: number;
    name: string;
    img: React.ReactNode;
}

const wines: WineProps[] = [
    {
        id: 1,
        name: "ВИНО КРАСНОЕ СУХОЕ WINEPARK КАБЕРНЕ ФРАН 2021",
        img: <img className="h-[280px] " src="/bottle1.png" />,
    },
    {
        id: 2,
        name: "ВИНО КРАСНОЕ СУХОЕ КОНСТАНТИН ДЗИТОЕВ РЕЗЕРВ 2020",
        img: <img className="h-[280px] " src="/bottle2.png" />,
    },
    {
        id: 3,
        name: "ВИНО КРАСНОЕ СУХОЕ СОБЕР БАШ РУБИН И РУБИН 2020",
        img: <img className="h-[280px] " src="/bottle3.png" />,
    },
    {
        id: 4,
        name: "Вино белое сухое ШардонеВионье",
        img: <img className="h-[280px] " src="/bottle4.png" />,
    },
    {
        id: 5,
        name: "Вино белое сухое Бельбек Мускат",
        img: <img className="h-[280px] " src="/bottle5.png" />,
    },
    {
        id: 6,
        name: "Игристое вино розовое брют",
        img: <img className="h-[280px] " src="/bottle6.png" />,
    },
];

export default function CatalogPage() {
    return (
        <div className="flex gap-10 items-center justify-center flex-wrap">
            {wines.map((wine) => (
                <Card className={cn("w-[580px] m-5")} key={wine.id}>
                    <CardContent className="m-4">
                        <div className="flex justify-center ">{wine.img}</div>
                        <div className="flex justify-center text-[15px]">
                            {wine.name}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
