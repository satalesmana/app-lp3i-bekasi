import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

interface PostCardProps {
    item: {
        id: string;
        post: string;
        img: string | null;
        created_by: {
            name: string;
            email: string;
        } | null; 
        created_at: string;
    };
    onPress: () => void;
}

export default function PostCard({ item, onPress }: PostCardProps) {
    const initial = item.created_by?.name?.charAt(0).toUpperCase() || "U";

    // Fungsi buat format jam upload bray
    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) return 'baru saja';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}j`;
        if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}h`;
        
        // Kalau udah lewat seminggu, tampilin tanggal aja bray
        return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
    };
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{initial}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name} numberOfLines={1}>
                        {item.created_by?.name || "Anonymous"} 
                    </Text>
                    <Text style={styles.username} numberOfLines={1}>
                        @{item.created_by?.email?.split('@')[0] || "guest"}
                    </Text>
                    {/* INI YANG LO MAU BRAY: JAM UPLOAD */}
                    <Text style={styles.timeDot}> · </Text>
                    <Text style={styles.timeText}>{formatTime(item.created_at)}</Text>
                </View>

                <Text style={styles.postText}>{item.post}</Text>

                {item.img && item.img.trim() !== "" ? (
                   <Image 
                        source={{ 
                            uri: item.img,
                        }} 
                        style={styles.postImage} 
                        resizeMode="cover"
                    />
                ) : null}

                <View style={styles.footer}>
                    <View style={styles.iconGroup}>
                        <Ionicons name="chatbubble-outline" size={16} color="#657786" />
                        <Text style={styles.footerText}>12</Text>
                    </View>
                    <View style={styles.iconGroup}>
                        <Ionicons name="git-compare-outline" size={16} color="#657786" />
                        <Text style={styles.footerText}>6</Text>
                    </View>
                    <View style={styles.iconGroup}>
                        <Ionicons name="heart-outline" size={16} color="#657786" />
                        <Text style={styles.footerText}>15</Text>
                    </View>
                    <Ionicons name="share-outline" size={16} color="#657786" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CED4DA',
        backgroundColor: '#FFFFFF',
    },
    avatarContainer: {
        marginRight: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1DA1F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000000',
        maxWidth: '40%', // Biar gak tabrakan bray
    },
    username: {
        color: '#657786',
        fontSize: 14,
        marginLeft: 4,
        maxWidth: '30%',
    },
    timeDot: {
        color: '#657786',
        fontSize: 14,
    },
    timeText: {
        color: '#657786',
        fontSize: 14,
    },
    postText: {
        fontSize: 15,
        lineHeight: 20,
        color: '#14171A',
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 10,
        backgroundColor: '#f0f0f0', 
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30,
        marginTop: 5,
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        marginLeft: 4,
        color: '#657786',
        fontSize: 13,
    }
});