
import { Button, Card, Text,Grid,Image, Row } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces";
import { FC } from "react";
import { useRouter } from "next/router";



export const Pokemon:FC<SmallPokemon> = ({pokemon,id,image,name,xs,sm,md,xl,setArrayFav,}) => {
  const router = useRouter();
  const handleClick = (e:any ,id:any) => {
    if(e.target.classList.value !== 'button-fav'){
      router.push(`/pokemon/${id}`)
    }
  
  }



  return (
    <Grid  xs={xs} sm={sm} md={md} xl={xl} >
       <Card  
       isHoverable 
       isPressable 
       onClick={(event)=>{
      handleClick(event,id+1);
    }}>
       <Card.Body>
           
            <Image 
            src={image} 
            alt='pokemon' 
            width={100} 
            height={140} />
        
        </Card.Body>
        <Card.Footer>
          <Row css={{
            justifyContent: 'space-between',
          }}>
          <Text transform='capitalize' h4 css={{
            flex: 4,
            textAlign: 'center',
          }}>{name}</Text>
          <button className="button-fav" style={
            {flex: 1,
             cursor: 'pointer',
            }
            
          }
          onClick={()=>{
            setArrayFav(pokemon);
          }}>Fav</button>
          </Row>
        </Card.Footer>
        </Card>
        </Grid>
     
  )
}
