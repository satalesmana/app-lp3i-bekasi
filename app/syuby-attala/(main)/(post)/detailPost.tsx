import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DetailPostPage() {
    // 1. Tangkep data yang dikirim dari halaman List
    const params = useLocalSearchParams();
    const { postData } = params;
    
    // Parse balik string JSON jadi Object
    const post = postData ? JSON.parse(postData) : null;
    
    // Safety check kalo datanya null
    if (!post) {
        return (
            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Data post tidak ditemukan, bray.</Text>
                <TouchableOpacity onPress={() => router.back()} style={{marginTop: 20}}>
                    <Text style={{color: 'blue'}}>Kembali</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    // Ambil data user dari kolom json created_by
    const user = post.created_by || {};
    const userName = user.name || 'User';
    const userEmail = user.email ? `@${user.email.split('@')[0]}` : '@guest';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <ScrollView style={{ flex: 1 }}>
                {/* === BAGIAN UTAMA POST === */}
                <View style={styles.mainPostContainer}>
                    {/* User Info */}
                    <View style={styles.userInfo}>
                        <Image 
                             source={{ uri: 'https://ui-avatars.com/api/?name=' + userName }} 
                             style={styles.avatarLarge} 
                        />
                        <View>
                            <Text style={styles.nameLarge}>{userName}</Text>
                            <Text style={styles.username}>{userEmail}</Text>
                        </View>
                    </View>

                    <Text style={styles.postTextLarge}>
                        {post.post}
                    </Text>

                    {post.img && (
                        <Image 
                            source={{ uri: post.img }} 
                            style={styles.postImageLarge} 
                        />
                    )}

                    <Text style={styles.timestamp}>
                         09:28 • 19/12/2025 • Twitter Web App
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.statsRow}>
                        <Text style={styles.statCount}>6 <Text style={styles.statLabel}>Retweets</Text></Text>
                        <Text style={styles.statCount}>15 <Text style={styles.statLabel}>Likes</Text></Text>
                    </View>

                    <View style={styles.divider} />

                    {/* Action Buttons (Icon) */}
                    <View style={styles.actionRow}>
                        <Ionicons name="chatbubble-outline" size={22} color="gray" />
                        <Ionicons name="git-compare-outline" size={22} color="gray" />
                        <Ionicons name="heart-outline" size={22} color="gray" />
                        <Ionicons name="share-outline" size={22} color="gray" />
                    </View>
                     <View style={styles.divider} />
                </View>

                <View style={styles.replyItem}>
                     <Image source={{ uri: 'https://ui-avatars.com/api/?name=Kiero' }} style={styles.avatarSmall} />
                     <View style={{flex: 1}}>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.replyName}>kiero_d</Text>
                                <Text style={styles.replyHandle}>@kiero_d • 2d</Text>
                            </View>
                        </View>
                        <Text style={styles.replyTarget}>Replying to <Text style={{color:'#1DA1F2'}}>{userEmail}</Text></Text>
                        <Text style={styles.replyText}>
                            Ganteng bangettttttt aw
                        </Text>
                        
                        <View style={styles.replyActions}>
                            <Ionicons name="chatbubble-outline" size={16} color="gray" />
                            <Text style={styles.actionText}>1</Text>
                            <Ionicons name="heart-outline" size={16} color="gray" style={{marginLeft: 15}} />
                            <Text style={styles.actionText}>3</Text>
                        </View>
                     </View>
                </View>

                <View style={styles.replyItem}>
                     <Image source={{ uri: 'https://ui-avatars.com/api/?name=' + userName }} style={styles.avatarSmall} />
                     <View style={{flex: 1}}>
                         <View style={{flexDirection:'row'}}>
                                <Text style={styles.replyName}>{userName}</Text>
                                <Text style={styles.replyHandle}>{userEmail} • 2d</Text>
                         </View>
                        <Text style={styles.replyText}>
                            I Like It
                        </Text>
                     </View>
                </View>

            </ScrollView>

            {/* Input Bar di Bawah */}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.bottomInput}>
                    <Image source={{ uri: 'https://ui-avatars.com/api/?name=Me' }} style={styles.avatarSmall} />
                    <TextInput 
                        placeholder="Tweet your reply" 
                        style={styles.inputField} 
                        multiline
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    mainPostContainer: {
        padding: 15,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarLarge: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: '#ccc',
    },
    nameLarge: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    username: {
        color: 'gray',
    },
    postTextLarge: {
        fontSize: 20, // Font lebih gede buat detail (kayak Twitter)
        lineHeight: 28,
        color: '#000',
        marginBottom: 10,
    },
    postImageLarge: {
        width: '100%',
        height: 300,
        borderRadius: 15,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    timestamp: {
        color: 'gray',
        fontSize: 14,
        marginVertical: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#E1E8ED',
        marginVertical: 10,
    },
    statsRow: {
        flexDirection: 'row',
    },
    statCount: {
        fontWeight: 'bold',
        marginRight: 15,
        fontSize: 15,
    },
    statLabel: {
        fontWeight: 'normal',
        color: 'gray',
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
    },
    // Styles buat Reply Item
    replyItem: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    avatarSmall: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#eee',
    },
    replyName: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    replyHandle: {
        color: 'gray',
    },
    replyTarget: {
        color: 'gray',
        marginBottom: 5,
    },
    replyText: {
        fontSize: 15,
        lineHeight: 20,
        marginBottom: 8,
    },
    replyActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        color: 'gray',
        marginLeft: 5,
        fontSize: 12,
    },
    // Bottom Input
    bottomInput: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputField: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginLeft: 10,
        color: '#000',
    }
});