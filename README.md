# Create a JavaScript Action for Azure Key Vault

```yaml
      - name: Get secret
        uses: ikumi9/azure-keyvault-action@v1.0.0
        with:
          keyvault: vaultname
          secret: secret-name
        id: get-secret
```

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:

https://github.com/marketplace/actions/key-vault-explorer?version=v1.0.0