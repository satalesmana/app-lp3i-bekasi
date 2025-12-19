import PostCard from '@/componets/module/post/Card';
import { FloatingButton } from "@/componets/myButton";
import { router, useFocusEffect } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import { FlatList, SafeAreaView, RefreshControl, Text, View, StyleSheet } from "react-native";
import { supabase } from '../../../../lib/supabase';
import { Ionicons } from '@expo/vector-icons';

interface Post {
    id: string;
    post: string;
    img: string | null;
    created_by: {
        name: string;
        email: string;
    } | null;
    created_at: string;
}

export default function PostPage() {
    const [data, setData] = useState<Post[]>([])
    const [refreshing, setRefreshing] = useState(false)
    const [userInitial, setUserInitial] = useState("U");

    const onAddNewPost = () => {
        router.push('/HendrawanAJyd/(main)/(post)/form')
    }

    useEffect(() => {
        const getInitial = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user?.email) {
                const name = session.user.email.split('@')[0];
                setUserInitial(name.charAt(0).toUpperCase());
            }
        };
        getInitial();
    }, []);

    const fetchPostData = async () => {
        try {
            const { data: posts, error } = await supabase
                .from('new_post')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) {
                console.error("Gagal menarik data:", error);
            } else {
                setData(posts as Post[]);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setRefreshing(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchPostData();
            return () => {}; 
        }, [])
    );

    const onRefresh = () => {
        setRefreshing(true);
        fetchPostData();
    }

    const goToDetail = (item : Post) => {
        router.push({
            pathname: '/HendrawanAJyd/(main)/(post)/detail',
            params: { id: item.id, postData: JSON.stringify(item) }
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            
            <View style={styles.headerContainer}>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>{userInitial}</Text>
                </View>

                <Ionicons name="logo-twitter" size={28} color="#1DA1F2" />

                <View style={{ width: 34 }} /> 
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                renderItem={({ item }) => (
                    <PostCard 
                        item={item} 
                        onPress={() => goToDetail(item)}
                    />
                )}  
                contentContainerStyle={{ paddingVertical: 10 }}
                ListEmptyComponent={() => (
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Text style={{ color: 'gray' }}>Silahkan tunggu, sedang sinkron data...</Text>
                    </View>
                )}
            />
            <FloatingButton onPress={onAddNewPost} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
    },
    avatarContainer: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#fff',
        fontSize: 14, 
        fontWeight: 'bold',
    }
});