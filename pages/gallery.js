import Image from "next/image";

const Gallery = () => {

    const arr = [1,2,3,4,5]

    return ( 
        <>
            <h1>Gallery Page</h1>
            <hr />

            <div>
                {
                arr.map(x=>(
                    <Image src={`/img/img_${x}.jpg`} alt={`/img/img_${x}.jpg`} width='600' height='300' />
                    ))
                }
            </div>

        </>
    );
}
 
export default Gallery;