import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "../../components/ui/card";
import { cardData } from "./constants";

export const DashboardCards = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {cardData.map((card, index) => (
                <Card key={index} className={card.color}>
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{card.metric}</p>
                    </CardContent>
                    <CardFooter>
                        <p>{card.trendValue} from last week(up icon)</p>
                    </CardFooter>
                </Card>

            ))}
        </div>
    )
}    
