export default function formatTimeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const secondsPast = (now.getTime() - date.getTime())/ 1000;

    if(secondsPast < 3600){
        return `${Math.floor(secondsPast / 60)}m ago`;
    }else if(secondsPast < 60){
        return `${Math.floor(secondsPast)}s ago`;
    } 
    if(secondsPast > 86400) {
        const daysPast = Math.floor(secondsPast / 86400);
        return daysPast > 1 ? `${daysPast} days ago` : '1 day ago';
    } else {
        return `${Math.floor(secondsPast /3600)}h ago`;
    }
}