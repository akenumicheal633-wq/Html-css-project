const SUPABASE_URL = "https://wyxbsreuzcrpzpiunddl.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eGJzcmV1emNycHpwaXVuZGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMDQzMzMsImV4cCI6MjA5OTg4MDMzM30.fxWKE1bHKhy7kMeF34_y3Xlt2QPsafK3Kg1JDtUXBBU";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const { error } = await client
        .from("contacts")
        .insert([
            {
                name,
                email,
                message
            }
        ]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Message sent successfully!");
        form.reset();
    }
});