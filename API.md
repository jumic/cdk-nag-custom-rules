# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="Classes"></a>

### MyCustomChecks <a name="MyCustomChecks" id="@jumic/cdk-nag-custom-rules.MyCustomChecks"></a>

#### Initializers <a name="Initializers" id="@jumic/cdk-nag-custom-rules.MyCustomChecks.Initializer"></a>

```typescript
import { MyCustomChecks } from '@jumic/cdk-nag-custom-rules'

new MyCustomChecks(props?: NagPackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jumic/cdk-nag-custom-rules.MyCustomChecks.Initializer.parameter.props">props</a></code> | <code>cdk-nag.NagPackProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@jumic/cdk-nag-custom-rules.MyCustomChecks.Initializer.parameter.props"></a>

- *Type:* cdk-nag.NagPackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jumic/cdk-nag-custom-rules.MyCustomChecks.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@jumic/cdk-nag-custom-rules.MyCustomChecks.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@jumic/cdk-nag-custom-rules.MyCustomChecks.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jumic/cdk-nag-custom-rules.MyCustomChecks.property.readPackName">readPackName</a></code> | <code>string</code> | *No description.* |

---

##### `readPackName`<sup>Required</sup> <a name="readPackName" id="@jumic/cdk-nag-custom-rules.MyCustomChecks.property.readPackName"></a>

```typescript
public readonly readPackName: string;
```

- *Type:* string

---



