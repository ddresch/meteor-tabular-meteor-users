# Test example to get rid of the Error: Tabular.Table options must specify collection

If you add the package `dburles:mongo-collection-instances` at the end of packages list you will get the mentioned error remove it and you'll be fine.

Like this the loading sequence matters:

## Working

  dburles:mongo-collection-instances
	aldeed:tabular

## Crashes

  dburles:mongo-collection-instances
	aldeed:tabular

# Conclusion

If you use a package which references `mongo-collection-instances` e.g. `houston:admin` or `rubaxa:sortable` add these before `aldeed:tabular`.