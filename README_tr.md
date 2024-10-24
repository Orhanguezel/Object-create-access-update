# Nesne: oluşturma, erişme, güncelleme

Bu alıştırma, nesnelerle temel işlemleri doğru anlamanızı ve uygulamanızı sağlamak için tasarlanmıştır. Genellikle nesnelerle şu işlemler yapılır:

- Nesneler oluşturma
- Nesnelerin özelliklerine erişme ve okuma
- Bu özelliklerin değerlerini güncelleme veya değiştirme

## Görev 1

Aşağıdaki nesneye bakarak, `read` özelliğinin değerini `false` yerine `true` olarak değiştirin. Sonra tüm nesneyi konsola yazdırın.

```javascript
const book = {
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: false
};
```

Beklenen çıktı:

```plaintext
{
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: true
}
```

## Görev 2

Aşağıdaki nesneye bakarak, `age` özelliğinin değerini 1 arttırın. Sonra tüm nesneyi konsola yazdırın.

```javascript
const person = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};
```

Beklenen çıktı:

```javascript
{
    firstName: "Martha",
    lastName: "Martin",
    age: 28
};
```

## Görev 3

Aşağıdaki nesneye bakarak, `discountedPrice` özelliğinin değerini, `price` özelliğinin yarısı olacak şekilde değiştirin.

Sonra aşağıdaki örnekte olduğu gibi bir mesajı konsola yazdırın.

```javascript
const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};
```

**ÖNEMLİ**: `discountedPrice` değerini değiştirirken, doğrudan `22` yazmak yerine `price` özelliğini kullanarak yeni değeri hesapladığınızdan emin olun.

Beklenen çıktı:

```plaintext
İNDİRİM: yeşil Dolphin şapka şimdi sadece 11€ yerine 22€!
```

## Görev 4

Aşağıdaki nesneye bakarak, `fullName` adlı yeni bir özellik ekleyin.

Bu özellik, `firstName` ve `lastName` değerlerini birleştirerek, aralarına bir boşluk eklemeli.

```javascript
const person = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};
```

Beklenen çıktı:

```plaintext
{
    firstName: "Jim",
    lastName: "Jameson",
    age: 37,
    fullName: "Jim Jameson"
};
```

## Görev 5

Aşağıdaki nesneye bakarak, `city` özelliğinin değerini büyük harfle başlaması için değiştirin.

```javascript
const person = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};
```

**ÖNEMLİ**: `city` değerini el ile "London" yazmak yerine, mevcut `city` değerini kullanarak değişiklik yapmaya çalışın.

Beklenen çıktı:

```plaintext
{
    firstName: "Sylvia",
    lastName: "Sun",
    city: "London"
};
```