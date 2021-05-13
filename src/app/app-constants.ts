export class AppConstants {

	public static get baseServidor(): string { return "http://localhost:8080/" }

	public static get baseLogin(): string { return this.baseServidor + "cursospringrestapi/login" }

	public static get baseUrl(): string {return this.baseServidor + "cursospringrestapi/usuario/"}

	public static get getBaseUrlPath() : string {return this.baseServidor + "cursospringrestapi/"}
    
	public static get baseUrlfor(): string {return this.baseServidor + "cursospringrestapi/fornecedor/"}
	
	public static get baseUrlprod(): string {return this.baseServidor + "cursospringrestapi/produto/"}

}
