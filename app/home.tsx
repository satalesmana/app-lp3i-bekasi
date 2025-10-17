import { router } from "expo-router";
import { Button, FlatList, Text, View } from "react-native";
import { ButtonPrimary, ButtonSecondary, ButtonWarning } from "../componets/myButton";


const RenderItem =({item}:any)  =>{
  if(item.type === "primary"){
    return (
      <ButtonPrimary 
        label={item.title} 
        onPress={()=>{router.push(item.link as any)}} />
    )
  }
    
  if(item.type === "secondary"){
    return (
      <ButtonSecondary 
        label={item.title} 
        onPress={()=>{router.push(item.link as any)}} />
    )
  }
    
  if(item.type === "warning"){
    return (
      <ButtonWarning 
        label={item.title} 
        onPress={()=>{router.push(item.link as any)}} />
    )
  }

  return null;
}

export default function homeScreen() {
  const menu = [
    {title: "Sata Lesmana", link: "/sata-lesmana"},
    {title: "Tohir", link: "/muhamad-tohir"},
    {title: "Zakky", link: "/zakky-mufra"},
  ];

  const menuFlatlist = [
    {title: "Sata Lesmana", link: "/sata-lesmana", type: "primary"},
    {title: "Tohir", link: "/muhamad-tohir", type: "secondary"},
    {title: "Zakky", link: "/zakky-mufra", type: "warning"},
    {title: "Dayat", link: "/dayat", type: "primary"},
    {title: "Hafiizh", link: "/Hafiizh", type: "primary"},
    {title: "Rheza", link: "/Rheza", type: "secondary"},
    {title: "Rhegema Satya Nugroho", link: "/Rhegema_satya_nugrohoza", type: "warning"},
    {title: "Fatimah Azzahra", link: "/fatimah-azzahra", type: "secondary"},
    {title: "Ade", link: "/ade", type: "warning"},
    {title: "Hendrawan", link: "/Hndrawanjyd", type: "secondary"},
    {title: "Salsabila", link: "/salsabila-nurul", type: "primary"},
  ];


  return (
    <View style={{flex: 1, padding: 15}}>
        <Text style={{textAlign:'center', fontWeight: "bold", fontSize: 18}}>Menu menggunakan Map</Text>
        {
          menu.map((item, index) => {
            return (
              <View key={index} style={{marginVertical: 5}}>
                <Button 
                  title={item.title} 
                  onPress={()=>{router.push(item.link as any)}}/>
              </View>
            )
          })
        } 

        <Text style={{textAlign:'center', fontWeight: "bold", fontSize: 18}}>
          Menu menggunakan FlatList  
        </Text>

        <FlatList
          data={menuFlatlist}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <View><RenderItem item={item} /></View>}
        />
    </View>
    
  );
}