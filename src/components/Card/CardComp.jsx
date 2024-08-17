import Card from "./Card"
import { Data } from "./DocterList"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function CardComp() {

    return (
        <div className="container">
            <div className="row">
                {Data.map((obj, index) => {
                    return (

                        <div className="col-md-3 col-lg-3 col-sm-6" key={index}>
                           <Card
                                imgSrc="image.jpg" 
                                specialization={obj.Specialization}
                                doctorName={obj.Name}
                                description={obj.Description}
                                rating={obj.Rating}
                                available={obj.Available}
                                experience={obj.Experience}
                                color={obj.Color}
                            />
                        </div>

                    )
                })}
            </div>
        </div>
    );

   

}
