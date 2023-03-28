
import { Button, Card, Text,Grid,Image, Row } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces";
import { FC } from "react";
import { useRouter } from "next/router";



export const Pokemon:FC<SmallPokemon> = ({id,image,name,xs,sm,md,xl}) => {
  const router = useRouter();
  const handleClick = (id:any) => {
    router.push(`/pokemon/${id}`)
  }



  return (
    <Grid  xs={xs} sm={sm} md={md} xl={xl} >
       <Card  
       isHoverable 
       isPressable 
       onClick={()=>{
      handleClick(id+1);
    }}>
       <Card.Body>
           
            <Image 
            src={image} 
            alt='pokemon' 
            width={100} 
            height={140} />
        
        </Card.Body>
        <Card.Footer>
          <Row justify='center'>
          <Text transform='capitalize' h4>{name}</Text>
          </Row>
        </Card.Footer>
        </Card>
        </Grid>
     
  )
}
