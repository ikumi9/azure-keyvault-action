# Create a JavaScript Action for Azure Key Vault

```yaml
      - name: Get secret
        uses: ikumi9/azure-keyvault-action@v1.0.0
        with:
          keyvault: vaultname
          secret: secret-name
        id: get-secret
```

