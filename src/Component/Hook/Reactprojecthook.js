import { useQuery } from "@tanstack/react-query";


export const ReactProjecthook = () => {
    const {data: reactprojects = [],refetch,isLoading} = useQuery({
        queryKey: ['reactprojects'],
        queryFn: async() =>{
            const res = await fetch(`Reactproject.json`)
            const data = await res.json();
            return data;
           
        }
    });
    return [reactprojects,isLoading];
};