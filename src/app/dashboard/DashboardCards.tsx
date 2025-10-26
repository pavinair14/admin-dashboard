import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { cardData } from "./constants";

export const DashboardCards = () => (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {cardData.map((card, index) => (
            <Card key={index} className={card.color}>
                <CardHeader>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-5xl font-medium">{card.metric}</p>
                </CardContent>
                {card?.trendValue && <CardFooter>
                    <p className="text-xs w-full">
                        {card?.trendValue > 0 ?
                            <span className="flex items-center">+{card.trendValue} from last week <ArrowUp size={10} className="ml-1" /> </span> :
                            <span className="flex items-center">{card.trendValue} from last week <ArrowDown size={10} className="ml-1" /></span>
                        }</p>
                </CardFooter>}
            </Card>

        ))}
    </div>
)
