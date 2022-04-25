
export const CalcItemsOnPage = (repositoriesCount: number, currentPage: number, pageSize: number) => {

    let value = currentPage * pageSize
    let prevValue = value - 3
    if(repositoriesCount && value >= repositoriesCount) {
        return `${prevValue}-${repositoriesCount} of ${repositoriesCount} items`
    }
    return `${prevValue}-${value} of ${repositoriesCount} items`
}
// repositoriesCount: number,