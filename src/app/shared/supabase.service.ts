import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
const env = {
    url:"https://rodqnknbnvykzqxvgmvf.supabase.co",
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvZHFua25ibnZ5a3pxeHZnbXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNTQ4NzEsImV4cCI6MjAyNTYzMDg3MX0.0bGqW4RiAMeae4T2PWTfgADzFT89Xz6oqFLIMHcQtdo"
}
@Injectable({providedIn:'root'})
export class SupbaseService {
 supabase :SupabaseClient;
    constructor(){
        this.supabase  = createClient(env.url,env.apiKey);
    }
}