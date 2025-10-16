import {Text, TouchableOpacity, Image,Platform} from 'react-native'
import {MenuItem} from "@/type";
import {appwriteConfig} from "@/lib/appwrite";


const normalizeProjectParam = (rawUrl: string, projectId: string) => {
    try {
        const u = new URL(rawUrl);
        // remove any duplicated/old project params
        u.searchParams.delete("project");
        // set the correct one
        u.searchParams.set("project", projectId);
        return u.toString();
    } catch {
        // Fallback: strip any project= occurrences and append once
        const withoutProject = rawUrl
            .replace(/\?project=[^&]+/gi, "")
            .replace(/&project=[^&]+/gi, "");
        return (withoutProject.includes("?")
            ? `${withoutProject}&project=${projectId}`
            : `${withoutProject}?project=${projectId}`);
    }
};

const MenuCard = ({ item: { $id, image_url, name, price }}: { item: MenuItem}) => {
    const imageUrl = normalizeProjectParam(image_url, appwriteConfig.projectId);

    return (
        <TouchableOpacity className="menu-card" style={Platform.OS === 'android' ? { elevation: 10, shadowColor: '#878787'}: {}}>
            <Image source={{ uri: imageUrl }} className="size-32 absolute -top-10" resizeMode="contain" />
            <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1}>{name}</Text>
            <Text className="body-regular text-gray-200 mb-4">From ${price}</Text>
            <TouchableOpacity onPress={() => ({})}>
                <Text className="paragraph-bold text-primary">Add to Cart +</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )


}
export default MenuCard
