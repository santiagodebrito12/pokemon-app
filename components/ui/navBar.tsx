import { useTheme,Text, Spacer, Button } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface navBarProps{
    themeState: string,
    setTheme: Function,
}
export const NavBar = ({themeState,setTheme}:navBarProps) => {
    const{theme }=useTheme();
    
    const router = useRouter();

    const handleClick = () => {

        router.push('/');
    }

    return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0px 20px',
        backgroundColor:theme?.colors.gray200.value,  

        }}>
            

          
            <Text color="blue" h2>P</Text>
            <Text  h3 css={{
                    cursor:'pointer',
            }}  onClick={()=>{
                handleClick();
            }}>okemon</Text>
             <Spacer css={{flex:1}}/>
             <Text  css={{
                cursor:'pointer',
             }} h2 onClick={()=>{
                router.push('/favoritos');
             }}>Favoritos</Text>
                <Button color="gradient" css={{
                    marginLeft:'20px',
                }} onPress={()=>{
                
                themeState == 'ligth' ? setTheme('dark') :  setTheme('ligth');
                
                }}>
                {themeState == 'ligth' ? 'Dark' : 'Ligth'}
                </Button>
    </div>

  )
}
