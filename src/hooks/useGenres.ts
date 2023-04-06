import genres from "../data/genres";
// import useData from "./UseData";
export interface Genre {
    id:number;
    name:string;
    // slug:string,
    // games_count:number,
    image_background:string
}

// const useGenres = ()=> useData<Genre>('/genres')
//本地读取数据
const useGenres = ()=>({ data:genres,isLoading:false,error:null})
export default useGenres;