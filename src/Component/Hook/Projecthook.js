import { useQuery } from "@tanstack/react-query";


export const Projecthook = () => {
    const {data: projects = [],refetch,isLoading} = useQuery({
        queryKey: ['projects'],
        queryFn: async() =>{
            const res = await fetch(`Project.json`)
            const data = await res.json();
            return data;
           
        }
    });
    return [projects,isLoading];
};

