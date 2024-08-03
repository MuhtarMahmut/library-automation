export class BrowserUtility {

    static async sleep(seconds){
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }

    // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...
    

}