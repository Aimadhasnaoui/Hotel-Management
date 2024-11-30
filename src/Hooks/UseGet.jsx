import { useQuery } from "@tanstack/react-query";
 function getdata(key, callback) {
    const data = useQuery({
        queryKey:key,
        queryFn:callback,
        
    })
    return data
}