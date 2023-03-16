import { Center, Heading } from "@chakra-ui/react";

function ShoppingCart() {
    return (
        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <Center>
                <Heading  as='h3' size='md' p={"6"}>Din varukorg!</Heading> 
            </Center>
          
        </div>
    );
}

export default ShoppingCart;