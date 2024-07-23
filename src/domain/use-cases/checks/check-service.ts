
interface CheckServiceUseCase {

    execute(url: string): Promise<boolean>;
}
 
type SucessCallback =() => void;
type ErrorCallback = (error: string) => void;


export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly sucessCallback: SucessCallback,
        private readonly errorCallback: ErrorCallback,
    ){}

    async execute(url: string): Promise<boolean> {


        try {

            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error on Check Service: ${url}`);

            }

            this.sucessCallback(); // Call the success callback if HTTP request is successful

            return true; // Simulate successful HTTP request


        } catch (error) {

            console.log(`${ error}`);

            this.errorCallback(`${error}`); // Call the error callback with the error message
            return false; // Simulate failure in HTTP request

        }


        return true; // Simulate successful HTTP request

    }

}