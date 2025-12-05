import Card from "../../components/shared/Card";
import { services } from "./data/services"
import type { CardProps } from "./type";

const IntegrationPage = () => {
    return <>
        <div className="ml-10">
            <div className="mb-5">
                <div className="text-2xl font-bold text-gray-800">
                    Choose a Service to Connect
            </div>
            <div className="text-sm text-gray-600 mt-3">
                Connect BraveGen to other tools you use.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">

                {services.map((service: CardProps) => (
                    <Card
                        key={service.name}
                        {...service}
                    />
                ))}
            </div>
        </div>

        <hr/>

        <div>

        </div>
    </div >
    </>
}

export default IntegrationPage;