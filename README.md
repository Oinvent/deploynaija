DeployNaija: Zero-Token Git-to-cPanel/VPS Continuous Deployment Engine
DeployNaija is a lightweight, zero-token continuous deployment (CD) tool engineered to bridge modern Git workflows with local Nigerian hosting infrastructure (e.g., QServers, Whogohost, GigaLayer).

Built specifically to mitigate severe Naira-USD foreign exchange volatility and help institutions comply with the CBN Data Localisation Directives, DeployNaija provides an automated, "AWS CodePipeline-like" deployment pipeline directly to cPanel shared hosting and Linux VPS environments.
Key Capabilities
 Agentless & Zero-Token Architecture: Securely deploys code over standard SSH/SFTP using custom SSH keypairs, completely bypassing the need for restricted native cPanel API tokens or WHM root access.
 Stateless Ephemeral Build Engine: Safely pulls repositories into isolated, short-lived build containers, compiles optimized static assets (⁠npm run build⁠, ⁠dotnet publish⁠), transfers build outputs, and immediately purges all source code from SaaS memory.
 Multi-Language Automation: Native deployment strategies for React, Vue, Laravel, Django (via automated Phusion Passenger ⁠tmp/restart.txt⁠ triggers), and statically compiled C#/.NET, Go, and Rust binaries.
 Naira-First & Sovereign Ready: Designed for seamless 100% NGN billing via Paystack while guaranteeing that sensitive application data remains strictly within local Nigerian data centers.
